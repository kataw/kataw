# Kataw parser test case

### Printer Options

`````js
{ printWidth: 20 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
export {};
export {} from ".";
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
                "flags": 0,
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
            "end": 10
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "from": {
                    "kind": 201392131,
                    "text": ".",
                    "rawText": "\".\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 20,
                "end": 29
            },
            "exportKind": 0,
            "flags": 81,
            "transformFlags": 0,
            "start": 10,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "export {};\nexport {} from \".\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
export {};
export {} from "\".\"";;

```

### Diagnostics

```javascript
✔ No errors
```

