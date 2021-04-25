# Kataw parser test case

## Input

`````js
wrap({async [foo""](){}});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 16
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 22,
                    "end": 22
                },
                "flags": 256,
                "start": 19,
                "end": 22
            },
            "flags": 128,
            "start": 19,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "wrap({async [foo\"\"](){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 16, end: 18
@{x2716}@ ',' expected - start: 16, end: 18
@{x2716}@ ',' expected - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ ',' expected - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Statement expected - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 21, end: 22
@{x2716}@ Expression expected - start: 22, end: 23
@{x2716}@ Statement expected - start: 22, end: 23
@{x2716}@ Statement expected - start: 23, end: 24
@{x2716}@ Statement expected - start: 24, end: 25

```

