import request from '@/utils/request'

export function getRoles() {
  return request({
    url: '/api/identity/roles',
    method: 'GET'
  })
}
export function addRole(data) {
  debugger;
  return request.post('/api/identity/roles', data)
}


export function getRole(id) {
  return request({
    url: `/api/identity/roles/${id}`,
    method: 'GET'
  })
}


export function updateRole(id, data) {
  return request({
    url: `/api/identity/roles/${id}`,
    method: 'PUT',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/api/identity/roles/${id}`,
    method: 'DELETE'
  })
}
