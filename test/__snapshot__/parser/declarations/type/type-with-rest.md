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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 247,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
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
                                        "flags": 768,
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
                                        "flags": 768,
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
                        "staticToken": false,
                        "flags": 0,
                        "start": 10,
                        "end": 17
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 8,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "type C = { ...A&B };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

