# Kataw parser test case

## Input

`````js
type a = ({} | {[x]:string}) => T;
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
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 28,
                    "end": 31
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134234353,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 195,
                                            "protoKeyword": null,
                                            "staticToken": null,
                                            "name": null,
                                            "key": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "flags": 0,
                                            "start": 16,
                                            "end": 26
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 27
                                }
                            ],
                            "flags": 0,
                            "start": 12,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 31
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 31,
                    "end": 33
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type a = ({} | {[x]:string}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

