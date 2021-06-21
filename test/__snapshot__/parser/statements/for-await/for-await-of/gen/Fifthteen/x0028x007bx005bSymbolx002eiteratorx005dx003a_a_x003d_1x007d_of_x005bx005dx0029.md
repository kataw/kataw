# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: Fifthteen
> :: case: ({[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function * f() { for await
({[Symbol.iterator]: a = 1} of [])  { } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 22,
                                "end": 26
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 26,
                                "end": 32
                            },
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Symbol",
                                                        "rawText": "Symbol",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 42
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "start": 43,
                                                        "end": 51
                                                    },
                                                    "flags": 536870944,
                                                    "start": 36,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 52
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 53,
                                                    "end": 55
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 59
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 35,
                                    "end": 59
                                },
                                "flags": 48,
                                "start": 34,
                                "end": 60
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 60,
                                "end": 63
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 66
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 70,
                                    "end": 70
                                },
                                "flags": 16,
                                "start": 67,
                                "end": 72
                            },
                            "flags": 80,
                            "start": 22,
                            "end": 72
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 72
                },
                "flags": 32,
                "start": 20,
                "end": 74
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "async function * f() { for await\n({[Symbol.iterator]: a = 1} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

 async function* f() {
for await({  : a=1 } of []) {  }
} 
```

### Diagnostics

```javascript
✔ No errors
```

