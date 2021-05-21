# Kataw parser test case

## Input

`````js
let a = 1; const a = 2;

const a = 1; let a = 2;
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 10,
                "end": 16
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "start": 16,
                "end": 22
            },
            "flags": 33554448,
            "start": 10,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 23,
                "end": 30
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 36
                    }
                ],
                "flags": 16777232,
                "start": 30,
                "end": 36
            },
            "flags": 33554448,
            "start": 23,
            "end": 37
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 37,
                "end": 41
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 41,
                            "end": 43
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 45,
                            "end": 47
                        },
                        "flags": 16,
                        "start": 41,
                        "end": 47
                    }
                ],
                "flags": 33554448,
                "start": 41,
                "end": 47
            },
            "flags": 33554448,
            "start": 37,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "let a = 1; const a = 2;\n\nconst a = 1; let a = 2;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 16, end: 18
✖ Cannot redeclare block-scoped variable - start: 30, end: 32
✖ Cannot redeclare block-scoped variable - start: 41, end: 43

```

