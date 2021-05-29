# Kataw parser test case

## Input

`````js
async <T>(fn: () => T) => fn;

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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 22,
                "end": 25
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 7,
                        "end": 8
                    }
                ],
                "flags": 0,
                "start": 5,
                "end": 9
            },
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "fn",
                        "rawText": "fn",
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 16,
                                "end": 19
                            },
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 15,
                                "end": 15
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 13,
                            "end": 21
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 21
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 10,
                    "end": 21
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 25,
                "end": 28
            },
            "flags": 288,
            "start": 0,
            "end": 28
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 28,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async <T>(fn: () => T) => fn;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

async (fn) =>  fn

```

### Diagnostics

```javascript
✔ No errors
```

