# Kataw parser test case

## Input

`````js
opaque type Counter: Box<T> = Container<T>;
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
            "kind": 269,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "start": 0,
                "end": 11
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Counter",
                "rawText": "Counter",
                "flags": 96,
                "start": 11,
                "end": 19
            },
            "typeParameters": null,
            "superType": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Box",
                    "rawText": "Box",
                    "flags": 96,
                    "start": 20,
                    "end": 24
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
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 25,
                                "end": 26
                            },
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
            "impltype": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Container",
                    "rawText": "Container",
                    "flags": 96,
                    "start": 29,
                    "end": 39
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
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 41
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 40,
                                "end": 41
                            },
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
            "flags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 42,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "opaque type Counter: Box<T> = Container<T>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript



```

### Diagnostics

```javascript
✔ No errors
```

