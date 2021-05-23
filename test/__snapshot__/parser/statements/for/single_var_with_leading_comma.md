# Kataw parser test case

## Input

`````js
for (let {,x} = obj;;);
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
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 10
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 12
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 12,
                "end": 12
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 12,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 15,
                "end": 19
            },
            "flags": 16,
            "start": 15,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 20,
            "end": 21
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 22,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (let {,x} = obj;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 11
✖ Expression expected - start: 12, end: 13
✖ Declaration or statement expected - start: 13, end: 15
✖ Declaration or statement expected - start: 21, end: 22

```

