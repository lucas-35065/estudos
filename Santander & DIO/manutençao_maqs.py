import json
import pandas as pd
import requests


# Leitura do arquivo.csv
df = pd.read_csv('manut_maqs_2023.csv')

# conversão do df em lista
maquinas = df.values.tolist()
print(json.dumps(maquinas, indent=2))

# codigo_maquina = pegar_coluna('Maq_Cod')
# nome_maquina = pegar_coluna('Maq_nome')
# data_entrada = pegar_coluna('Dat_entr')
# ultima_manutencao = pegar_coluna('Last_maint')
# cep_localizacao_maq = pegar_coluna('Cep_locz_maq')

# BAIRRO_MAQUINA = 
# 'https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/'

# acesso a api dos correios
# def get_bairro (cep):
#     response = requests.get(f'{BAIRRO_MAQUINA}/{cep}', timeout=5000)
#     return response.json() if response.status_code == 200 else None
