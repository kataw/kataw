# Kataw parser test case

## Input

`````js
let {a:{}} = 0
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 8,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 14
            },
            "flags": 33554448,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "let {a:{}} = 0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

let {
  a: {}
} = 0;
```

### Diagnostics

```javascript
✔ No errors
```

