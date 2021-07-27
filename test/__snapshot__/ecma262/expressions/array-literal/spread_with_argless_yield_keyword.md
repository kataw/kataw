# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
function *f(){ return [...yield]; }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 26
                                            },
                                            "argument": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 31
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "flags": 1073741856,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 21,
                                "end": 32
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 14,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 33
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 35
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function *f(){ return [...yield]; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
function *f() {
  return [...yield ];
}
```

### Diagnostics

```javascript
✔ No errors
```

