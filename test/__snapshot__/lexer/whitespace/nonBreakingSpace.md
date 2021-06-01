# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left@{xa0}@right
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
                                        "text": "xa0",
                                        "rawText": "xa0",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 10
                        },
                        "flags": 0,
                        "start": 4,
                        "end": 10
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "right",
                            "rawText": "right",
                            "flags": 96,
                            "start": 11,
                            "end": 16
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 4,
                "end": 16
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 16,
                "end": 16
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "start": 4,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "left@{xa0}@right",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 4, end: 6
✖ Binding identifier expected - start: 16, end: 16

```

