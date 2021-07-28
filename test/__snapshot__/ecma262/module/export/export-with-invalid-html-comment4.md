# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: false, module: true }
`````

## Input

`````js
let x;
--> foo
export { x }
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
                "transformFlags": 0,
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 32,
                        "transformFlags": 16384,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 6,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 14
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 21
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "transformFlags": 0,
            "start": 14,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "let x;\n--> foo\nexport { x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 10

```

