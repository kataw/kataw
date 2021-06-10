# Kataw parser test case

## Input

`````js
type C = { ...A&B };
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 10,
                            "end": 14
                        },
                        "type": {
                            "kind": 138,
                            "types": [
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                }
                            ],
                            "flags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 10,
                        "end": 17
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type C = { ...A&B };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

