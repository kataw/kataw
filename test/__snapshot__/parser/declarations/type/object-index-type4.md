# Kataw parser test case

## Input

`````js
type x = { [x:string]:string }
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
                "text": "x",
                "rawText": "x",
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
                        "staticToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "key": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 14,
                            "end": 20
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type x = { [x:string]:string }",
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

