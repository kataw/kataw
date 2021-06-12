# Kataw parser test case

## Input

`````js
type LinkedList<Type> = Type & { next: LinkedList<Type> };
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
                "end": 15
            },
            "name": {
                "kind": 134299649,
                "text": "LinkedList",
                "rawText": "LinkedList",
                "flags": 96,
                "start": 4,
                "end": 15
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "Type",
                            "rawText": "Type",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 16,
                        "end": 20
                    }
                ],
                "flags": 0,
                "start": 15,
                "end": 21
            },
            "type": {
                "kind": 138,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Type",
                            "rawText": "Type",
                            "flags": 96,
                            "start": 23,
                            "end": 28
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 23,
                        "end": 28
                    },
                    {
                        "kind": 134234353,
                        "properties": [
                            {
                                "kind": 193,
                                "protoKeyword": null,
                                "staticToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "next",
                                    "rawText": "next",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 37
                                },
                                "optionalToken": null,
                                "value": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "LinkedList",
                                        "rawText": "LinkedList",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 49
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
                                                        "text": "Type",
                                                        "rawText": "Type",
                                                        "flags": 96,
                                                        "start": 50,
                                                        "end": 54
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 50,
                                                    "end": 54
                                                },
                                                "flags": 0,
                                                "start": 50,
                                                "end": 54
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 49,
                                        "end": 55
                                    },
                                    "flags": 0,
                                    "start": 38,
                                    "end": 55
                                },
                                "flags": 0,
                                "start": 32,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 30,
                        "end": 57
                    }
                ],
                "flags": 0,
                "start": 28,
                "end": 57
            },
            "flags": 16,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "type LinkedList<Type> = Type & { next: LinkedList<Type> };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

