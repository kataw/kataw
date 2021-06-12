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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 12,
                            "end": 18
                        },
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 12,
                            "end": 18
                        },
                        "value": {
                            "kind": 134234345,
                            "flags": 64,
                            "start": 20,
                            "end": 27
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 10,
                        "end": 27
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type A = { [string]: number };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

