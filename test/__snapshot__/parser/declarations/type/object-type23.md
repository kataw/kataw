# Kataw parser test case

## Input

`````js
type a = {((((-1) => [c|d]))):string};
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
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 196,
                        "protoKeyword": null,
                        "typeParameter": null,
                        "value": {
                            "kind": 282,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 11,
                            "end": 11
                        },
                        "staticToken": null,
                        "returnType": {
                            "kind": 260,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 17,
                                    "end": 20
                                },
                                "parameters": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 271,
                                            "subtractionToken": {
                                                "kind": 134318643,
                                                "flags": 64,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "value": 1,
                                            "flags": 2097216,
                                            "start": 14,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 20
                                },
                                "returnType": {
                                    "kind": 147,
                                    "elementTypes": [
                                        {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 25
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 24,
                                                    "end": 25
                                                }
                                            ],
                                            "flags": 2097152,
                                            "start": 23,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 20,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 13,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 28
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 30,
                "end": 36
            },
            "flags": 16,
            "start": 30,
            "end": 36
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 37,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "type a = {((((-1) => [c|d]))):string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 11, end: 12
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 30
✖ Declaration or statement expected - start: 36, end: 37

```

