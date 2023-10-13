"""
A função deste código é checar se uma data em um arquivo CSV tem mais de 6 meses. 
A ideia é poder crescer o código para virar um software de manutenção de aparelhos industriais
"""
from datetime import datetime
import os
import pandas as pd

# Obtém o diretório do script atual
diretorio_script = os.path.dirname(os.path.abspath(__file__))

# Muda o diretório de trabalho para o diretório do script
os.chdir(diretorio_script)

df = pd.read_csv('manutencao_maqs_2023.csv', parse_dates=['Dat_entr', 'Last_maint'], dayfirst=True)

# Obtendo data atual
data_atual = datetime.now()

dados_gravar = []

# Criando uma coluna 'Status' no DataFrame com os valores calculados
df['Status'] = df['Last_maint'].apply(
    lambda x: 'ALERTA: +6 MESES' if (data_atual - x).days > 180 else 'Manu em dia'
)

# Selecionando colunas específicas
df = df[['Maq_nome', 'Last_maint', 'Status']]

# Salvando o DataFrame em um novo arquivo CSV
df.to_csv('status_manutencao.csv', index=False)

print("Os dados foram escritos no arquivo status_manutencao.csv.")
