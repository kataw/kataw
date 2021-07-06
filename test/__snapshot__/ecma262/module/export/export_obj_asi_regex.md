# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {}
/foo/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 1,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "transformFlags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 97,
                    "transformFlags": 1024,
                    "start": 9,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 97,
                "transformFlags": 1024,
                "start": 9,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "export {}\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 9, end: 11
✖ Identifier expected - start: 15, end: 15

```

