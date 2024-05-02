def get_numero_dipe(date_to):
    numero_dipe = ''
    date_to_array = date_to.split('-')
    numero_dipe = date_to_array[1] + date_to_array[0][2:]
    return numero_dipe

get_numero_dipe('2024-04-01')

def sanitize_company_cnps(num_cnps):
    num_to_array = num_cnps.split('-')
    sanitized_number = num_to_array[0] + num_to_array[1]
    return sanitized_number

sanitize_company_cnps('321-0103125-B')

def get_regime_cnps(risk_rate):
    regime_cnps = None
    if not risk_rate or risk_rate == 1.75:
        regime_cnps = 1
    elif risk_rate > 1.75 and risk_rate <= 2.50:
        regime_cnps = 2
    elif risk_rate > 2.50 and risk_rate <= 5:
        regime_cnps = 3
    else:
        regime_cnps = 4
    
    return str(regime_cnps)

get_regime_cnps(6)

def get_salary_code_amount(amount,num_carac):
    salary_code_amount = None
    length = len(str(int(amount)))
    compl_elt = ''
    diff = None
    if  length < num_carac:
        utility_array = []
        diff = 10 - length
        for i in range(diff):
            a = 0
            utility_array.append(a)
        compl_elt = ''.join(str(el) for el in utility_array)
        salary_code_amount = compl_elt + str(int(amount))
    elif length == num_carac:
        salary_code_amount = str(int(amount))
    else:
        # gerer l'exception pour tout montant superieur a 10  chiffres
        salary_code_amount = '0000000000'
    return salary_code_amount

get_salary_code_amount(5000.0,10)



def get_salare_exeptionel(array):
   
       sal_exep =  sum(el['amount'] for el in array)
       return sal_exep

get_salare_exeptionel([{'amount':30000},{'amount':10000}])


def sanitize_employe_matricule(matricule,mat_len):
    sanitized_number = None
    if not matricule:
        sanitized_number = '00000000000000'
    elif len(matricule) < mat_len:
        length = len(str(matricule))
        compl_elt = ''
        diff = None
        if  length < mat_len:
            utility_array = []
            diff = mat_len - length
            for i in range(diff):
                a = 0
                utility_array.append(a)
            compl_elt = ''.join(str(el) for el in utility_array)
            sanitized_number = compl_elt + str(matricule)
    elif len(matricule) >= mat_len:
            sanitized_number = matricule[1:15]
    else:
            sanitized_number = '00000000000000'
    return sanitized_number

sanitize_employe_matricule('emp/0000/00000',14)


def get_numero_de_ligne(length):
        numero_ligne = None
        for el in range(length):
          numero_ligne = el + 1
          print(numero_ligne)
        return numero_ligne

get_numero_de_ligne(4)
