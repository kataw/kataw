# Kataw parser test case

## Input

`````js
type Tr = <Return>(() => Pr<Return>) => Return;
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "Tr",
                "rawText": "Tr",
                "flags": 96,
                "start": 4,
                "end": 7
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
                    "start": 18,
                    "end": 18
                },
                "returnType": {
                    "kind": 260,
                    "type": {
                        "kind": 261,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 21,
                            "end": 24
                        },
                        "parameters": [],
                        "returnType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Pr",
                                "rawText": "Pr",
                                "flags": 96,
                                "start": 24,
                                "end": 27
                            },
                            "typeParameters": {
                                "kind": 266,
                                "parameters": [
                                    {
                                        "kind": 267,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Return",
                                                "rawText": "Return",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 34
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 28,
                                            "end": 34
                                        },
                                        "flags": 0,
                                        "start": 28,
                                        "end": 34
                                    }
                                ],
                                "flags": 0,
                                "start": 27,
                                "end": 35
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 35
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 18,
                        "end": 35
                    },
                    "flags": 0,
                    "start": 18,
                    "end": 36
                },
                "typeParameters": {
                    "kind": 265,
                    "typeParameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "Return",
                                "rawText": "Return",
                                "flags": 96,
                                "start": 11,
                                "end": 17
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 0,
                            "start": 11,
                            "end": 17
                        }
                    ],
                    "flags": 0,
                    "start": 9,
                    "end": 18
                },
                "flags": 0,
                "start": 9,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Return",
                "rawText": "Return",
                "flags": 96,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 39,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "type Tr = <Return>(() => Pr<Return>) => Return;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 18, end: 19
✖ Expected a `;` - start: 36, end: 39

```

