# Kataw parser test case

## Input

`````js
for (let {x,, y} of obj);
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
                "flags": 80,
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
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
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 13,
                        "end": 15
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 15
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 15,
                    "end": 15
                },
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "of",
                "rawText": "of",
                "flags": 96,
                "start": 16,
                "end": 19
            },
            "flags": 16,
            "start": 16,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "start": 19,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 24,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "for (let {x,, y} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13
✖ Identifier expected - start: 15, end: 16
✖ Expected a `;` - start: 19, end: 23
✖ Expected a `;` - start: 23, end: 24

```

