# Kataw parser test case

## Input

`````js
type a = (["string"]);
`````

## Options

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
                "kind": 260,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 134217967,
                            "value": "string",
                            "flags": 0,
                            "start": 11,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 10,
                    "end": 20
                },
                "flags": 0,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "type a = ([\"string\"]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

