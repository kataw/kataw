# Kataw parser test case

## Input

`````js
type a = {[x]:string};
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
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "name": null,
                        "key": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 14,
                            "end": 20
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 10,
                        "end": 20
                    }
                ],
                "trailingComma": false,
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
    "source": "type a = {[x]:string};",
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

