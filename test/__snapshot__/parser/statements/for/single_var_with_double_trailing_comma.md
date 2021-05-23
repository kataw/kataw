# Kataw parser test case

## Input

`````js
for (let {x,,} = obj;;);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
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
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 13
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "flags": 16,
            "start": 16,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 23,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (let {x,,} = obj;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13
✖ Trailing comma not allowed. - start: 13, end: 14
✖ Declaration or statement expected - start: 14, end: 16
✖ Declaration or statement expected - start: 22, end: 23

```

