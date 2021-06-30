# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left@{x2004}@right
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
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 5,
                            "end": 5
                        },
                        "flags": 0,
                        "start": 5,
                        "end": 5
                    }
                ],
                "flags": 32,
                "start": 4,
                "end": 5
            },
            "classKeyword": null,
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x2004",
                                "rawText": "x2004",
                                "flags": 96,
                                "start": 6,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 6,
                            "end": 11
                        }
                    ],
                    "flags": 32,
                    "start": 6,
                    "end": 11
                },
                "flags": 5,
                "start": 32,
                "end": 12
            },
            "flags": 16,
            "start": 4,
            "end": 12
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
                        "start": 13,
                        "end": 18
                    }
                ],
                "flags": 32,
                "start": 12,
                "end": 18
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 18,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
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
            "start": 12,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "left@{x2004}@right",
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
✖ Identifier expected. A decorator name can only be an identifier - start: 5, end: 6
✖ A class declaration without the 'default' modifier must have a name. - start: 5, end: 6
✖ Binding identifier expected - start: 18, end: 18

```

