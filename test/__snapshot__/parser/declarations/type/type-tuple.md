# Kataw parser test case

## Input

`````js
type A = { [string]: number };
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
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [],
                "indexers": [
                    {
                        "kind": 195,
                        "name": null,
                        "key": {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 12,
                            "end": 18
                        },
                        "value": {
                            "kind": 134234345,
                            "flags": 768,
                            "start": 20,
                            "end": 27
                        },
                        "staticToken": false,
                        "flags": 0,
                        "start": 10,
                        "end": 27
                    }
                ],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "type A = { [string]: number };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

