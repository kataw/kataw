# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * from "foo";
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export * from \"foo\";",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": null,
                "namedExports": null,
                "exportFromClause": {
                    "kind": 78,
                    "moduleExportName": null,
                    "namedBinding": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "fromClause": {
                    "kind": 4261583,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

