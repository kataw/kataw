# Kataw parser test case

## Input

`````js
opaque type Counter: Box<T> = Container<T>;
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
            "opaqueToken": {
                "kind": 16630,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "Counter",
                "rawText": "Counter",
                "flags": 768,
                "start": 11,
                "end": 19
            },
            "opaqueType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "Box",
                        "rawText": "Box",
                        "flags": 768,
                        "start": 20,
                        "end": 24
                    },
                    "typeParameters": {
                        "kind": 146,
                        "types": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 768,
                                    "start": 25,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 25,
                                "end": 26
                            }
                        ],
                        "flags": 0,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 0,
                    "start": 20,
                    "end": 27
                },
                "flags": 0,
                "start": 19,
                "end": 27
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Container",
                    "rawText": "Container",
                    "flags": 768,
                    "start": 29,
                    "end": 39
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 768,
                                "start": 40,
                                "end": 41
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 40,
                            "end": 41
                        }
                    ],
                    "flags": 0,
                    "start": 39,
                    "end": 42
                },
                "flags": 0,
                "start": 29,
                "end": 42
            },
            "flags": 128,
            "start": 6,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "opaque type Counter: Box<T> = Container<T>;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

