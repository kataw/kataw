# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import foo, * as bar from "foo";
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "as",
                        "rawText": "as",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 11,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 11,
                "end": 16
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "\"foo\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "import foo, * as bar from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 11, end: 13
✖ '; ' is not allowed here. Did you mean ';'? - start: 16, end: 20
✖ 'from' is not allowed here. Did you mean ';'? - start: 20, end: 25
✖ '; ' is not allowed here. Did you mean ';'? - start: 25, end: 31

```

