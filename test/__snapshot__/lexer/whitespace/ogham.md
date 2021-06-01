# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left@{x1680}@right
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "left",
                "rawText": "left",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 4,
                            "end": 5
                        },
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x1680",
                                        "rawText": "x1680",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 12
                        },
                        "flags": 0,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 12,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "right",
                            "rawText": "right",
                            "flags": 96,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 18
                    }
                ],
                "flags": 32,
                "start": 4,
                "end": 18
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 18,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 18,
                    "end": 18
                },
                "flags": 18,
                "start": 32,
                "end": 18
            },
            "flags": 16,
            "start": 4,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "left@{x1680}@right",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 4, end: 6
✖ Binding identifier expected - start: 18, end: 18

```

