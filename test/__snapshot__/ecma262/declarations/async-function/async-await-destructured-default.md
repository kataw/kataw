ccccc# Kataw parser test case

## Input

`````js
async function wrap() {
    ({a = await b} = obj)
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 301,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 39
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 41
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4096,
                                                        "start": 33,
                                                        "end": 41
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 41
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 41
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 29,
                                        "end": 42
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 29,
                                    "end": 48
                                },
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 49
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 23,
                            "end": 49
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 51
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "async function wrap() {\n    ({a = await b} = obj)\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
async function wrap() {
  ({ a = await b } = obj);
}
```

### Diagnostics

```javascript
✔ No errors
```

