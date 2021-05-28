# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
 await: ;

 \u0061wait: ;

var await;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 6,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "labels": [
                {
                    "kind": 256,
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 6
                },
                {
                    "kind": 256,
                    "iterationStatement": false,
                    "flags": 16401,
                    "start": 9,
                    "end": 22
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 7,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 163,
            "label": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 16385,
                    "start": 9,
                    "end": 22
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 9,
                "end": 22
            },
            "labels": [
                {
                    "kind": 256,
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 6
                },
                {
                    "kind": 256,
                    "iterationStatement": false,
                    "flags": 16401,
                    "start": 9,
                    "end": 22
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 22,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 25
            },
            "flags": 16401,
            "start": 9,
            "end": 25
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 25,
                "end": 30
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 30,
                            "end": 36
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 30,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 30,
                "end": 36
            },
            "flags": 16,
            "start": 25,
            "end": 37
        }
    ],
    "isModule": true,
    "source": " await: ;\n\n \\u0061wait: ;\n\nvar await;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 7
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 0, end: 7
✖ 'await' keyword must not contain escaped characters - start: 9, end: 9
✖ Identifier expected - start: 22, end: 23
✖ Unicode escapes at the start of labels should not allow keywords - start: 9, end: 23
✖ Duplicate label - start: 9, end: 23
✖ Identifier expected. 'await' is a reserved word in module goal - start: 30, end: 36

```

