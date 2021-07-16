# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
import typeof foo24 from "bar";
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
                "transformFlags": 8192,
                "start": 6,
                "end": 13
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 24
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 19,
                "end": 30
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "foo24",
                    "rawText": "foo24",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "import typeof foo24 from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
import typeof foo24 from "\"bar\"";
```

### Diagnostics

```javascript
✔ No errors
```

