# Kataw parser test case

## Input

`````js
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noEmptyPattern: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 5
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 20
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 27
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 27,
                "end": 31
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 38
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 39
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 45
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 31,
                        "end": 45
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 46
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 46,
                "end": 50
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 53
                                        },
                                        "value": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 56,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 57
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 57
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 58
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 64
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 50,
                        "end": 64
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 50,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 65
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 65,
                "end": 74
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 74,
                "end": 78
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 80
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 81
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 79,
                "end": 81
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 84
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 82,
                "end": 85
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 65,
            "end": 85
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 85,
                "end": 94
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 94,
                "end": 98
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 100
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 99,
                        "end": 101
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 99,
                "end": 101
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 104
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 102,
                "end": 105
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 85,
            "end": 105
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 105,
                "end": 114
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 114,
                "end": 118
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 121
                                    },
                                    "value": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 124
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 122,
                                        "end": 125
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 125
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 125
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 126
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 119,
                "end": 126
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 129
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 127,
                "end": 130
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 105,
            "end": 130
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 130,
                "end": 139
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 139,
                "end": 143
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 146
                                    },
                                    "value": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 324,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 149,
                                            "end": 149
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 150
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 145,
                                    "end": 150
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 150
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 151
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 144,
                "end": 151
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 154
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 152,
                "end": 155
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 130,
            "end": 155
        }
    ],
    "isModule": false,
    "source": "var {} = foo;\nvar [] = foo;\nvar {a: {}} = foo;\nvar {a: []} = foo;\nfunction foo({}) {}\nfunction foo([]) {}\nfunction foo({a: {}}) {}\nfunction foo({a: []}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 155
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected empty object pattern - start: 5, end: 6
✖ Unexpected empty array pattern - start: 19, end: 20
✖ Unexpected empty object pattern - start: 37, end: 38
✖ Unexpected empty array pattern - start: 56, end: 57
✖ Unexpected empty object pattern - start: 80, end: 81
✖ Unexpected empty function - start: 84, end: 85
✖ Unexpected empty array pattern - start: 100, end: 101
✖ Unexpected empty function - start: 104, end: 105
✖ Unexpected empty object pattern - start: 124, end: 125
✖ Unexpected empty function - start: 129, end: 130
✖ Unexpected empty array pattern - start: 149, end: 150
✖ Unexpected empty function - start: 154, end: 155

```

