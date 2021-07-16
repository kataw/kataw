# Kataw parser test case

## Input

`````js
@1 class x {}

@[] class y {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
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
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 1
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 1,
                "transformFlags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 1,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1,
            "end": 2
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 2,
            "end": 13
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
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 16
                        },
                        "expression": {
                            "kind": 130,
                            "member": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 16
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 32,
                            "transformFlags": 4,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 24
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 26
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 26,
                "transformFlags": 0,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "@1 class x {}\n\n@[] class y {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 1, end: 2
✖ '; ' expected - start: 2, end: 8
✖ Identifier expected. A decorator name can only be an identifier - start: 16, end: 17
✖ An member access expression should take an argument. - start: 16, end: 18
✖ Identifier expected - start: 17, end: 18

```

