while-statement6# Kataw parser test case

## Input

`````js
var foo; /* comment */
var bar; // another comment
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 8,
                "end": 26
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 26,
                            "end": 30
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 26,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 30
            },
            "flags": 16,
            "start": 8,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "var foo; /* comment */\nvar bar; // another comment",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

var foo; /* comment */
var bar; // another comment
```

### Diagnostics

```javascript
✔ No errors
```

