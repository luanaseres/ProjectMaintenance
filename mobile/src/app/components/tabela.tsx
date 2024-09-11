import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

// Definição do tipo para representar um item (máquinas ou peças)
type Item = {
  id: number;
  nome: string;
  modelo: string;
  quantidade: string;
  status: string;
};

// Dados mockados de máquinas e peças
const itensMockados: Item[] = [
  { id: 1, nome: 'CNC', modelo: 'XYZ-1000', quantidade: '26', status: 'Ativo' },
  { id: 2, nome: 'Impressora 3D', modelo: 'Ultimaker S5', quantidade: '12', status: 'Inativo' },
  { id: 3, nome: 'Torno', modelo: 'HAAS ST-20', quantidade: '23', status: 'Ativo' },
  { id: 4, nome: 'Fresadora', modelo: 'Bridgeport VMC', quantidade: '10', status: 'Em Manutenção' },
  { id: 5, nome: 'Laser Cutter', modelo: 'Trotec Speedy 300', quantidade: '6', status: 'Ativo' },
  { id: 6, nome: 'Router CNC', modelo: 'ShopBot PRSalpha', quantidade: '13', status: 'Inativo' },
  { id: 7, nome: 'Plasma Cutter', modelo: 'Hypertherm Powermax45', quantidade: '2', status: 'Em Manutenção' },
  { id: 8, nome: 'CNC', modelo: 'DMG Mori CMX 600 V', quantidade: '15', status: 'Ativo' },
  { id: 9, nome: 'Impressora 3D', modelo: 'Formlabs Form 3', quantidade: '7', status: 'Inativo' },
  { id: 10, nome: 'Torno', modelo: 'Mazak QT-250MSY', quantidade: '8', status: 'Ativo' },
  { id: 11, nome: 'Parafuso M8', modelo: 'M8-01', quantidade: '150', status: 'Disponível' },
  { id: 12, nome: 'Rolamento 6204', modelo: '6204-AB', quantidade: '75', status: 'Disponível' },
  { id: 13, nome: 'Correia Timing', modelo: 'T5-100', quantidade: '30', status: 'Em Falta' },
  { id: 14, nome: 'Engrenagem 20T', modelo: '20T-PL', quantidade: '50', status: 'Disponível' },
  { id: 15, nome: 'Motor Elétrico 1HP', modelo: '1HP-MOTOR', quantidade: '12', status: 'Em Manutenção' },
];

// Função Tabela em React Native
export function Tabela() {
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const itemsPerPage = 10; // Quantidade de itens por página

  // Calcula o número total de páginas
  const totalPages = Math.ceil(itensMockados.length / itemsPerPage);

  // Função para trocar de página
  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Índices para fatiar o array de itens
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itensMockados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens da Empresa</Text>

      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>ID</Text>
            <Text style={styles.headerCell}>Nome</Text>
            <Text style={styles.headerCell}>Modelo</Text>
            <Text style={styles.headerCell}>Quantidade</Text>
            <Text style={styles.headerCell}>Status</Text>
            <Text style={styles.headerCell}>Detalhes</Text>
          </View>
          {currentItems.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.cell}>{item.id}</Text>
              <Text style={styles.cell}>{item.nome}</Text>
              <Text style={styles.cell}>{item.modelo}</Text>
              <Text style={styles.cell}>{item.quantidade}</Text>
              <Text style={styles.cell}>{item.status}</Text>
              <TouchableOpacity>
                <Text style={styles.detailsLink}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
        >
          <Text style={styles.pageButtonText}>Anterior</Text>
        </TouchableOpacity>
        <Text>Página {currentPage} de {totalPages}</Text>
        <TouchableOpacity
          onPress={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
        >
          <Text style={styles.pageButtonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  table: {
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  detailsLink: {
    color: '#4A90E2',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  pageButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
  },
  pageButtonText: {
    color: '#fff',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
