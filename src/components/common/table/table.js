import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/colors/colors';

const measureTextWidth = (text, fontSize = 14) => {
  const avgCharWidth = fontSize * 0.6;
  return text?.toString().length * avgCharWidth + 30;
};

const DynamicTable = ({
  data = [],
  columns = [],
  actions = true,
  onEdit,
  onDelete,
  onView,
  actionButtons = [
    { label: 'Edit', icon: 'edit', color: '#FF9500', action: 'edit' },
    { label: 'Delete', icon: 'delete', color: '#FF3B30', action: 'delete' },
  ],
  style = {},
  headerStyle = {},
  rowStyle = {},
  cellStyle = {},
  maxHeight = 400,
}) => {
  const tableHead = [...columns.map(col => col.label)];
  if (actions) tableHead.push('Actions');

  const tableData = data.map(item =>
    columns.map(col => (col.render ? col.render(item) : item[col.key] || '-'))
  );

  //  Dynamically calculate width for each column based on max text width
  const columnWidths = useMemo(() => {
    const widths = columns.map((col, colIndex) => {
      const headerWidth = measureTextWidth(col.label);
      const maxCellWidth = Math.max(
        ...data.map(item =>
          measureTextWidth(item[col.key] ? item[col.key].toString() : '-')
        ),
        headerWidth
      );
      return Math.min(maxCellWidth, 250); // prevent extra wide columns
    });
    if (actions) widths.push(100); // fixed for actions
    return widths;
  }, [data, columns, actions]);

  const renderActions = (rowData, rowIndex) => (
    <View style={styles.actionContainer}>
      {actionButtons.map((button, btnIndex) => (
        <TouchableOpacity
          key={btnIndex}
          style={[styles.actionButton]}
          onPress={() => {
            if (button.action === 'edit' && onEdit) onEdit(data[rowIndex]);
            else if (button.action === 'delete' && onDelete)
              onDelete(data[rowIndex]);
            else if (button.action === 'view' && onView)
              onView(data[rowIndex]);
          }}
        >
          <Icon name={button.icon} size={16} color={button.color} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {/*  Table Header */}
          <Table borderStyle={styles.border}>
            <Row
              data={tableHead}
              widthArr={columnWidths}
              style={[styles.header, headerStyle]}
              textStyle={styles.headerText}
            />
          </Table>

          {/*  Table Body */}
          <ScrollView style={{ maxHeight }} showsVerticalScrollIndicator>
            <Table borderStyle={styles.border}>
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={[styles.row, rowStyle]}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      width={columnWidths[cellIndex]}
                      textStyle={[styles.cellText, cellStyle]}
                    />
                  ))}
                  {actions && (
                    <Cell
                      data={renderActions(rowData, index)}
                      width={columnWidths[columnWidths.length - 1]}
                    />
                  )}
                </TableWrapper>
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>

      {data.length === 0 && (
        <View style={styles.emptyState}>
          <Icon name="inbox" size={48} color="#E5E5E5" />
          <Text style={styles.emptyStateText}>No data available</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  border: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  header: {
    height: 50,
    backgroundColor: COLORS.secondary,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    minHeight: 45,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 12,
    fontWeight: '500',
  },
});

export default DynamicTable;
