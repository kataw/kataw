# Kataw parser test case

## Input

`````js
let {x, ...y} = z
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "start": 7,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 17
            },
            "flags": 33554448,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "let {x, ...y} = z",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

 let {
    x,
    ...y
} = z; 
```

### Diagnostics

```javascript
✔ No errors
```

