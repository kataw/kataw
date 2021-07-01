# Kataw parser test case

## Input

`````js
function *f(){ return [...yield x]; }
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 14,
                                "end": 21
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 23,
                                                "end": 26
                                            },
                                            "argument": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 26,
                                                "end": 33
                                            },
                                            "flags": 1073741856,
                                            "start": 23,
                                            "end": 33
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 23,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 34
                            },
                            "flags": 80,
                            "start": 14,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 35
                },
                "flags": 32,
                "start": 13,
                "end": 37
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function *f(){ return [...yield x]; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

function * f() {
  return [...yield  x];
}

```

### Diagnostics

```javascript
✔ No errors
```

