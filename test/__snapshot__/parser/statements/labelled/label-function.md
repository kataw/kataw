# Kataw parser test case

## Input

`````js
foo: function() {}
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
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 3
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 4,
                    "end": 13
                },
                "generatorToken": null,
                "name": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 13,
                    "end": 13
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 13,
                    "end": 15
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 18
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 16,
                "start": 4,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "foo: function() {}",
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
✖ Binding identifier expected - start: 13, end: 14

```

