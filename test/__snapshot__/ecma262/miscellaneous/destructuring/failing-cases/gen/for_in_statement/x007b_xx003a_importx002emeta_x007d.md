# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/for_in_statement
> :: test: for in statement
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
for({ x: import.meta } in y);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "right": {
                                "kind": 299,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "metaIdentifier": {
                                    "kind": 16595,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 15,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 5,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 20
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 4,
                "end": 22
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 22,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for({ x: import.meta } in y);",
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
✖ Cannot use 'import.meta' outside a module - start: 15, end: 22
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 25, end: 27

```

