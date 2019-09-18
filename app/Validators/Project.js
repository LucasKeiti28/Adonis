'use strict'

const Antl = use('Antl')

class Project {
  get rules () {
    return {
      get validateAll () {
        return true
      },

      get rules () {
        return {
          title: 'required',
          description: 'required'
        }
      }
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Project
