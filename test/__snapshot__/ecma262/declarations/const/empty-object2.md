# Kataw parser test case

## Input

`````js
const {} = obj;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 10,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 14
            },
            "flags": 33554448,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "const {} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

  const { } = obj;

```

### Diagnostics

```javascript
✔ No errors
```

