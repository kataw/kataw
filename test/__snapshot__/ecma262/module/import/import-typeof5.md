# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import typeof a * from "b";
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
            "typeofKeyword": {
                "kind": 138477613,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
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
                        "start": 15,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "from",
                        "rawText": "from",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 22
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 15,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 15,
                "end": 22
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "b",
                "rawText": "\"b\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "import typeof a * from \"b\";",
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
✖ Identifier expected - start: 15, end: 17
✖ '; ' is not allowed here. Did you mean ';'? - start: 22, end: 26

```

