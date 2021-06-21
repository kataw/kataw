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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "parameters": [],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
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
                                    "start": 13,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "start": 21,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 26
                            },
                            "flags": 16,
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
                                                    "start": 37,
                                                    "end": 38
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 37,
                                                "end": 39
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 39
                                    },
                                    "flags": 2097152,
                                    "start": 27,
                                    "end": 39
                                },
                                "parameters": [],
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 41,
                                    "end": 44
                                },
                                "contents": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "start": 44,
                                    "end": 49
                                },
                                "flags": 288,
                                "start": 27,
                                "end": 49
                            },
                            "flags": 16,
                            "start": 27,
                            "end": 50
                        }
                    ],
                    "flags": 33,
                    "start": 13,
                    "end": 50
                },
                "flags": 32,
                "start": 11,
                "end": 52
            },
            "flags": 288,
            "start": 0,
            "end": 52
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 52,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "async () => {\n  await null;\n  async <T>() => null;\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

async () =>  {
  await null;
  async () =>  null;
}

```

### Diagnostics

```javascript
✔ No errors
```

