# Kataw parser test case

## Input

`````js
async () => {
  await null;
  async <T>() => null;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
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
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 21
                                    },
                                    "expression": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 13,
                                    "end": 26
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 13,
                                "end": 27
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 35
                                    },
                                    "typeParameters": {
                                        "kind": 307,
                                        "declarations": {
                                            "kind": 337,
                                            "parameters": [
                                                {
                                                    "kind": 146,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 38
                                                    },
                                                    "type": null,
                                                    "assignToken": null,
                                                    "defaultType": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 39
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 39
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 27,
                                        "end": 39
                                    },
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 44
                                    },
                                    "contents": {
                                        "kind": 138477575,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 49
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 49
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 27,
                                "end": 50
                            }
                        ],
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 50
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 52
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "async () => {\n  await null;\n  async <T>() => null;\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
async () => {
  await null;
  async <T>() => null;
};
```

### Diagnostics

```javascript
✔ No errors
```

