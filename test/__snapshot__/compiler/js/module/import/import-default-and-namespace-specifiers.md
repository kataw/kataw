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


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import foo, * as bar from \"foo\";",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 4261583,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 31
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "defaultBinding": {
                        "kind": 131102,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 10
                    },
                    "nameSpaceImport": {
                        "kind": 131102,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 16,
                        "end": 20
                    },
                    "namedImports": null,
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 20
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

