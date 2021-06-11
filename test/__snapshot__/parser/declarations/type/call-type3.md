# Kataw parser test case

## Input

`````js
type Fn1 = <T>(T) => T;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Fn1",
                "rawText": "Fn1",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": null,
                "parameters": {
                    "kind": 208,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 14,
                    "end": 14
                },
                "returnType": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 17,
                        "end": 20
                    },
                    "parameters": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 14,
                    "end": 22
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
                                "start": 12,
                                "end": 13
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 0,
                            "start": 12,
                            "end": 13
                        }
                    ],
                    "flags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 0,
                "start": 10,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type Fn1 = <T>(T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

